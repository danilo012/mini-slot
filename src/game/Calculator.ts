import { Block } from '/src/game/components/reels/components/Block';
import { Position } from '/src/game/strategy/Fixed';

export class Calculator {
  calculate([block01, block02, block03]: Block[], position: Position): number {
    if (block01.equals(block02, block03)) {
      return this.getValue(block01) * this.getMultiplier(block01, position);
    }

    if (block01.isAnyBAR && block02.isAnyBAR && block03.isAnyBAR) {
      // Any BAR combination
      return 1;
    }

    if (block01.isSevenOrCherry && block02.isSevenOrCherry && block03.isSevenOrCherry) {
      // Any Seven or Cherry combination
      return 1;
    }

    return 0;
  }

  private getMultiplier(block: Block, position: Position) {
    if (block.isCherry) {
      if (position === 'Top') return 1;
      if (position === 'Middle') return 1;
      if (position === 'Bottom') return 1;
    }

    if (block.isSeven) {
      if (position === 'Top') return 1;
      if (position === 'Middle') return 1;
      if (position === 'Bottom') return 2;
    }

    return 1;
  }

  private getValue(block: Block) {
    if (block.isBARx1) return 0;
    if (block.isBARx2) return 1;
    if (block.isBARx3) return 2;
    if (block.isSeven) return 1;
    if (block.isCherry) return 1;

    return 0;
  }
}
