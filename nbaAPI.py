import requests
import json
from nba_api.stats.static import teams
from nba_api.stats.static import players
from nba_api.live.nba.endpoints import scoreboard
from nba_api.stats.endpoints import commonteamroster
from nba_api.stats.endpoints import playercareerstats
from nba_api.stats.endpoints import leagueleaders
from nba_api.stats.endpoints import LeagueStandingsV3

# Calls NBA API to get list of current players
# Includes player id, full name, first name, last name, and is active
# dump nba_players list to create nba_players_json json
nba_players = players.get_active_players()
nba_players_json = json.dumps(nba_players)

# Calls NBA API to get list of current teams
# Includes team id, full name, abbreviation, nickname, city, state, year founded
# dump nba_teams list to create nba_teams_json json
nba_teams = teams.get_teams()
nba_teams_json = json.dumps(nba_teams)

# Calls NBA API to get league leaders
# Includes AST, PTS, and REB league leaders
league_leadersAST = leagueleaders.LeagueLeaders(
    league_id="00", per_mode48="PerGame", scope="RS", stat_category_abbreviation="AST").get_json()
league_leadersPTS = leagueleaders.LeagueLeaders(
    league_id="00", per_mode48="PerGame", scope="RS", stat_category_abbreviation="PTS").get_json()
league_leadersREB = leagueleaders.LeagueLeaders(
    league_id="00", per_mode48="PerGame", scope="RS", stat_category_abbreviation="REB").get_json()


# Calls NBA API to get a given players career stats
# Includes player searched by unique ID career total stats
player_stats = playercareerstats.PlayerCareerStats(
    1629029, "PerGame").career_totals_regular_season.get_json()

# Calls NBA API to get league standings
# includes wins/loses/record/last 10/by division etc.
league_standings = LeagueStandingsV3().get_json()
