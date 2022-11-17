import requests
import json
import boto3
# import http.client
# from nba_api.stats.static import teams
# from nba_api.stats.static import players
# from nba_api.live.nba.endpoints import scoreboard
# from nba_api.stats.endpoints import commonteamroster
# from nba_api.stats.endpoints import playercareerstats
# from nba_api.stats.endpoints import leagueleaders
# from nba_api.stats.endpoints import LeagueStandingsV3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('league_standing')

def lambda_handler(event, context):

    
    # # # Calls NBA API to get league standings
    # # # includes wins/loses/record/last 10/by division etc.
    # # league_standings = LeagueStandingsV3(league_id= "00", season= "2022-23", season_type= "Regular Season").standings.get_json()
    
    
    
    # # return league_standings

    # conn = http.client.HTTPSConnection("v1.basketball.api-sports.io")
    
    # headers = {
    #     'x-rapidapi-host': "v1.basketball.api-sports.io",
    #     'x-rapidapi-key': "f73e228d1a779ff6df159141ab07b98a"
    #     }
    
    # conn.request("GET", "/standings?league=12&season=2022-2023", headers=headers)
    
    # res = conn.getresponse()
    # data = res.read()
    # return data.decode("utf-8")
    
    # just need to scan dynamodb table
    
    return table.scan()

