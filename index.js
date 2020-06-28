function calculateScore(player) {
    switch(player.position){
      case 'QB':
       return QB(player.stats)
      case 'RB':
        return RB(player.stats)
      case 'WR':
        return WR(player.stats)
      case 'TE':
        return TE(player.stats)
      default:
        return 0
      }
    }
       function QB(playerStats) {
        score = 0
        score = (playerStats.passing.yards / 25) + (playerStats.passing.touchdowns * 6) + (playerStats.passing.interceptions * -3) + score
        score = (playerStats.rushing.yards / 10) + (playerStats.rushing.touchdowns * 6) + (playerStats.rushing.fumbles * -3) + score
        return score
      }
      function RB(playerStats) {
        score = 0
        score = (playerStats.rushing.yards / 10) + (playerStats.rushing.touchdowns * 6) + (playerStats.rushing.fumbles * -3) + score
        score = (playerStats.receiving.receptions) + (playerStats.receiving.yards / 10) + (playerStats.receiving.touchdowns * 6) + (playerStats.receiving.fumbles * -3) + score
        score = (playerStats.return.kickreturn.yards / 15) + (playerStats.return.kickreturn.touchdowns * 6) + (playerStats.return.kickreturn.fumbles * -3) + score
        score = (playerStats.return.puntreturn.yards / 15) + (playerStats.return.puntreturn.touchdowns * 6) + (playerStats.return.puntreturn.fumbles * -3) + score
        return score
      }
      function WR(playerStats) {
        score = 0
        score = (playerStats.rushing.yards / 10) + (playerStats.rushing.touchdowns * 6) + (playerStats.rushing.fumbles * -3) + score
        score = (playerStats.receiving.receptions) + (playerStats.receiving.yards / 10) + (playerStats.receiving.touchdowns * 6) + (playerStats.receiving.fumbles * -3) + score
        score = (playerStats.return.kickreturn.yards / 15) + (playerStats.return.kickreturn.touchdowns * 6) + (playerStats.return.kickreturn.fumbles * -3) + score
        score = (playerStats.return.puntreturn.yards / 15) + (playerStats.return.puntreturn.touchdowns * 6) + (playerStats.return.puntreturn.fumbles * -3) + score
        return score
      }
      function TE(playerStats) {
        score = 0
        score = (playerStats.receiving.receptions) + (playerStats.receiving.yards / 10) + (playerStats.receiving.touchdowns * 6) + (playerStats.receiving.fumbles * -3) + score
        return score
      }
    module.exports = calculateScore
    
    