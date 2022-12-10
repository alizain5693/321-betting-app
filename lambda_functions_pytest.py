import json
import nbaAPI
import nbaAPI_pytest
from urllib.request import urlopen
url = "https://x2xgysiaba64ej7uwyejehjtoq0gpzjz.lambda-url.us-east-1.on.aws/"
response = urlopen(url)
games_json = response.read()
games_dict = json.loads(games_json)
print("BALLS")
print (games_dict['scoreboard']['games'][0])
#************************** URL Response Code Tests *********************************

#Determines if get_players lambda function url receivese successful HTTP response code 
def test_get_players_url():
    url = "https://hb6pmjmqgrgirm32sgmipbivkq0nvuts.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    assert response.getcode() == 200

#Determines if get_teams lambda function url receivese successful HTTP response code 
def test_get_teams_url():
    url = "https://3cquvznjl3dkkrj4io6zbscpry0vjhrh.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    assert response.getcode() == 200

#Determines if get_assist_leaders lambda function url receivese successful HTTP response code 
def test_get_assist_leaders_url():
    url = "https://fidr2z7ssrfjfu67yqyqks6zse0sqabn.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    assert response.getcode() == 200

#Determines if get_points_leaders lambda function url receivese successful HTTP response code 
def test_get_points_leaders_url():
    url = "https://7vyl3l4hrrm7sy27qwswxg2qsm0atpqf.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    assert response.getcode() == 200

#Determines if get_rebound_leaders lambda function url receivese successful HTTP response code 
def test_get_rebound_leaders_url():
    url = "https://3yorx7mlme5jcqwtomjz5tiwyu0evrqb.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    assert response.getcode() == 200

#Determines if get_odds lambda function url receivese successful HTTP response code 
def test_get_odds_url():
    url = "https://zn6we6hnfizjuer6td53ywvnqa0yfshq.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    assert response.getcode() == 200

#Determines if get_league_standings lambda function url receivese successful HTTP response code 
def test_get_league_standings_url():
    url = "https://qp4qly5m5k6eoyvehvmavypp3m0krpwz.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    assert response.getcode() == 200

#Determines if lambda_get_games function url receivese successful HTTP response code 
def test_lambda_get_game_url():
    url = "https://x2xgysiaba64ej7uwyejehjtoq0gpzjz.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    assert response.getcode() == 200




#**************************Tests for get_odds*************************************

#Determines that odds string is in valid JSON format.
def test_odds_json_format():
    url = "https://zn6we6hnfizjuer6td53ywvnqa0yfshq.lambda-url.us-east-1.on.aws/"
    odds_response = urlopen(url)
    odds_json = odds_response.read()
    assert nbaAPI_pytest.checkJSON(odds_json) == True

#Determines that odds string is not empty.
def test_odds_length():
    url = "https://zn6we6hnfizjuer6td53ywvnqa0yfshq.lambda-url.us-east-1.on.aws/"
    odds_response = urlopen(url)
    odds_json = odds_response.read()
    odds_dict = json.loads(odds_json)
    assert len(odds_dict) != 0 


#**************************Tests for get_games*************************************
#Determines that lambda_get_games string is in valid JSON format.
def test_lambda_get_games_json_format():
    url = "https://x2xgysiaba64ej7uwyejehjtoq0gpzjz.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    games_json = response.read()
    assert nbaAPI_pytest.checkJSON(games_json) == True
    
#Determines if lambda_get_games string is not empty. 
def test_lambda_get_game_length():
    url = "https://x2xgysiaba64ej7uwyejehjtoq0gpzjz.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    games_json = response.read()
    games_dict = json.loads(games_json)
    assert len(games_dict) != 0 

#Tests that key inputs for Home.js are not empty: gameStatusText homeTeam, awayTeam, homeTeam.teamName, homeTeam.teamCity, 
#homeTeam.score, awayTeam.teamName, awayTeam.teamCity, awayTeam.score
def test_lambda_get_game_results():
    url = "https://x2xgysiaba64ej7uwyejehjtoq0gpzjz.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    games_json = response.read()
    games_dict = json.loads(games_json)
    games = games_dict['scoreboard']['games']
    for game in games:
        assert len(game["gameStatusText"]) != 0
        assert len(game["homeTeam"]) != 0
        assert len(game["awayTeam"]) != 0
        assert len(game["homeTeam"]["teamName"]) != 0
        assert len(game["homeTeam"]["teamCity"]) != 0
        assert len(game["awayTeam"]["teamCity"]) != 0
        assert len(game["awayTeam"]["teamName"]) != 0

#**************************Tests leauge_standings************************************

#Determines that league standings string is in valid JSON format.
def test_get_league_standings_format():
    url = "https://qp4qly5m5k6eoyvehvmavypp3m0krpwz.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    standings_json = response.read()
    assert nbaAPI_pytest.checkJSON(standings_json) == True

#Determines that league standings string is not empty.
def test_get_league_standings_length():
    url = "https://qp4qly5m5k6eoyvehvmavypp3m0krpwz.lambda-url.us-east-1.on.aws/"
    response = urlopen(url)
    standings_json = response.read()
    standings_dict = json.loads(standings_json)
    assert len(standings_dict) != 0 

#Determines that get_league_standings JSON includes every team in the NBA.
def test_get_league_standings_results():
    teamCatalogue = ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 
                'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'Los Angeles Clippers', 'Los Angeles Lakers', 
                'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks', 'Oklahoma City Thunder', 
                'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 
                'Washington Wizards']
    url = "https://qp4qly5m5k6eoyvehvmavypp3m0krpwz.lambda-url.us-east-1.on.aws/"
    leaugue_standings_response = urlopen(url)
    leaugue_standings_json = leaugue_standings_response.read()
    leaugue_standings_dict = json.loads(leaugue_standings_json)
    teams = leaugue_standings_dict.get("Items")
    teams.sort(key = lambda x: x['teamName'])
    sortedTeams = []
    for team in teams:
        if team['teamName'] not in sortedTeams:
            sortedTeams.append(team['teamName'])
    for i in range(len(sortedTeams)):
        assert sortedTeams[i] == teamCatalogue[i]