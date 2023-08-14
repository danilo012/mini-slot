import { SlotSound } from './slot-sound';
import { describe, it, expect, vi } from 'vitest';

describe('SlotSound', () => {
  describe('playSpin', () => {
    it('should play with default volume', () => {
      const winAudio = new Audio('win');
      const spinAudio = new Audio('spin');
      const winAudioMock = vi.spyOn(winAudio, 'play');
      const spinAudioMock = vi.spyOn(spinAudio, 'play');
      const sound = new SlotSound(winAudio, spinAudio);
      sound.playSpin();

      expect(winAudioMock).not.toHaveBeenCalled();
      expect(spinAudioMock).toHaveBeenCalled();

      expect(spinAudio.volume).toBeCloseTo(0.25);
      expect(spinAudio.muted).toBeFalsy();
    });

    it('should play with specified volume', () => {
      const spinAudio = new Audio('spin');
      const sound = new SlotSound(new Audio(), spinAudio);
      sound.playSpin(0.57);

      expect(spinAudio.volume).toBeCloseTo(0.57);
    });
  });
});
