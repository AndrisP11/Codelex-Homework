/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  perBest:number[];
  constructor(scores: number[],perBest:number[]) {
    this.scores = scores;
    this.perBest = perBest;
  }

  get latest() {
    return this.scores[this.scores.length-1];
  }

  get personalBest() {
    return Math.max(...this.scores);
  }

  get personalTopThree() {
    this.perBest = [...this.scores]
    this.perBest = this.perBest.sort(function(a, b){return b-a})
    
    return this.perBest.slice(0,3)
  }
}

export { HighScores };