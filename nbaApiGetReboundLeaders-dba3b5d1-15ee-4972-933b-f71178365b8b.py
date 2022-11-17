import requests
import json
from nba_api.stats.endpoints import leagueleaders

def lambda_handler(event, context):
    # Calls NBA API to get league leaders
    # Includes AST, PTS, and REB league leaders
    league_leadersREB = leagueleaders.LeagueLeaders(league_id="00", per_mode48="PerGame", scope="RS", stat_category_abbreviation="REB").get_json()
    
    return league_leadersREB
