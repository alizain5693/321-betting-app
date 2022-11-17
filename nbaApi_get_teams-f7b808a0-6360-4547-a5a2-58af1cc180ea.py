import requests
import json
from nba_api.stats.static import teams

def lambda_handler(event, context):
    # Calls NBA API to get list of current teams
    # Includes team id, full name, abbreviation, nickname, city, state, year founded
    # dump nba_teams list to create nba_teams_json json
    nba_teams = teams.get_teams()
    nba_teams_json = json.dumps(nba_teams)
    return nba_teams_json
