import json
import nbaAPI
from urllib.request import urlopen

print(nbaAPI.nba_players_json)

#function to test if string is correct JSON format.
def checkJSON(data):
    try:
        json.loads(data)
    except ValueError as error:
        return False
    return True

#Tests whether nba_players is in list format.
def test_nba_players():
    assert isinstance(nbaAPI.nba_players, list) == True

#Tests whether nba_players is empty.
def test_nba_players_empty():
    assert len(nbaAPI.nba_players) != 0

#determiens that nba_players_json is in valid JSON format.
def test_nba_players_json_format():
    assert checkJSON(nbaAPI.nba_players_json) == True

#Determines that nba_players_json string contains same amount of players as nba_players list.
def test_nba_players_json_length():
    players_dict = json.loads(nbaAPI.nba_players_json)
    assert len(players_dict) == len(nbaAPI.nba_players)

#determiens that league_leadersAST is in valid JSON format.
def test_league_leadersAST_json_format():
    assert checkJSON(nbaAPI.league_leadersAST) == True

#Determines that league_leadersAST string is not empty.
def test_league_leadersAST_length():
    league_leadersAST_dict = json.loads(nbaAPI.league_leadersAST)
    assert len(league_leadersAST_dict) != 0   

#determiens that league_leadersPTS is in valid JSON format.
def test_league_leadersPTS_json_format():
    assert checkJSON(nbaAPI.league_leadersPTS) == True

#Determines that league_leadersPTS string is not empty.
def test_league_leadersPTS_length():
    league_leadersPTS_dict = json.loads(nbaAPI.league_leadersPTS)
    assert len(league_leadersPTS_dict) != 0   

#determiens that league_leadersREB is in valid JSON format.
def test_league_leadersREB_json_format():
    assert checkJSON(nbaAPI.league_leadersREB) == True

#Determines that league_leadersREB string is not empty.
def test_league_leadersREB_length():
    league_leadersREB_dict = json.loads(nbaAPI.league_leadersREB)
    assert len(league_leadersREB_dict) != 0 

#determiens that player_stats is in valid JSON format.
def test_player_stats_json_format():
    assert checkJSON(nbaAPI.player_stats) == True

#Determines that player_stats string is not empty.
def test_player_stats_length():
    player_stats_dict = json.loads(nbaAPI.player_stats)
    assert len(player_stats_dict) != 0 



#get_league_standings is from different API than rest of tests.

#determiens that league_standings is in valid JSON format.
def test_league_standings_json_format():
    assert checkJSON(nbaAPI.league_standings) == True

#Determines that league_standings string is not empty.
def test_league_standings_length():
    league_standings_dict = json.loads(nbaAPI.league_standings)
    assert len(league_standings_dict) != 0 

