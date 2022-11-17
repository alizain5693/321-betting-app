import json
import http.client
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('nba_h2h_ml_odds')

def lambda_handler(event, context):
    # TODO implement
    conn = http.client.HTTPSConnection("api.the-odds-api.com")
    payload = ''
    headers = {}
    conn.request("GET", "/v4/sports/basketball_nba/odds/?apiKey=8c5f88d310eb020e4f2086fda8defa4a&regions=us&markets=h2h&oddsFormat=american", payload, headers)
    res = conn.getresponse()
    data = res.read()
    odds =json.loads(data.decode("utf-8"))
    
    for i in range (0, len(odds)):
        home_team = odds[i]["home_team"]
        away_team = odds[i]["away_team"]
        bookmaker = ""
        home_odds = ""
        away_odds = ""
        makers = odds[i]["bookmakers"]
        # print(makers[0])
        for j in range (0, len(makers)):
            bookmaker = makers[j]["title"]
            if(makers[j]["markets"][0]["outcomes"][0]==home_team):
                home_odds = makers[j]["markets"][0]["outcomes"][0]["price"]
                away_odds = makers[j]["markets"][0]["outcomes"][1]["price"]
            else:
                home_odds = makers[j]["markets"][0]["outcomes"][1]["price"]
                away_odds = makers[j]["markets"][0]["outcomes"][0]["price"]
            # putitem in database
            table.put_item(
                Item = {
                    'homeTeam':home_team,
                    'awayTeam':away_team,
                    'homeOdds':home_odds,
                    'awayOdds':away_odds,
                    'bookmaker':bookmaker
                    }
                )
            print(home_team,away_team,bookmaker,home_odds,away_odds)
    
    
    return odds
