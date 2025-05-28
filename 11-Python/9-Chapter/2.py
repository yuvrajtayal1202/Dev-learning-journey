import random
def game():
    print('game is starting....')
    score = random.randint(1,62)
    
    with open('hiScore.txt') as f:
        hiScore = f.read()
        if(hiScore != ""):
            hiScore = int(hiScore)
        else:
            hiScore = 0
    print(f'Your Score is {score}')
    if(score>hiScore):
     with open('hiScore.txt', 'w') as f:
          f.write(str(score))
    return score


game()