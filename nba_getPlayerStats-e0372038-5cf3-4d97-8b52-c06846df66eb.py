import requests
import json

from nba_api.stats.endpoints import playercareerstats


def lambda_handler(event, context):
    # Calls NBA API to get a given players career stats
    # Includes player searched by unique ID career total stats
    player_stats = playercareerstats.PlayerCareerStats(
        1629029, "PerGame").career_totals_regular_season.get_json()
    return player_stats