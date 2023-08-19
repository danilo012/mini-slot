import { Strategy } from '/src/game/strategy/Strategy';
import { Random } from '/src/game/strategy/Random';
import { Fixed } from '/src/game/strategy/Fixed';
import { Reels } from '/src/game/components/reels/Reels';
import { Symbols } from '/src/game/components/reels/components/Symbols';
import { iSubscribe } from '/src/game/interfaces/subscribe';
import GUI from 'lil-gui';

export class Modes implements iSubscribe {
  private readonly modes: {
    Random: Strategy;
    Fixed: Strategy;
  };
  private mode: Strategy;

  constructor(reels: Reels, symbols: Symbols, gui: GUI) {
    this.modes = {
      Random: new Random(reels, symbols),
      Fixed: new Fixed(reels, symbols, gui),
    };
    this.mode = this.modes.Random;
  }

  get current() {
    return this.mode;
  }

  changeTo(mode: 'Random' | 'Fixed') {
    this.mode.hideGui();
    this.mode = this.modes[mode];
    this.mode.showGui();
  }

  subscribe() {
    this.modes.Random.subscribe();
    this.modes.Fixed.subscribe();
  }
}
