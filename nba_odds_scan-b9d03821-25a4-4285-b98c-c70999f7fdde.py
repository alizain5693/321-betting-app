import json
import boto3


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('nba_h2h_ml_odds')


def lambda_handler(event, context):
    # TODO implement
    return table.scan()
