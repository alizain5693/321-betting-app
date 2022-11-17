import json
import requests
import json
from nba_api.stats.static import players

def lambda_handler(event, context):
    nba_players = players.get_active_players()
    nba_players_json = json.dumps(nba_players)
    return nba_players_json
