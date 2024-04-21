from turtle import*

for i in range(4):
    forward(50)
    left(90)

penup()
goto(0, 100)
pendown()

for i in range(4):
    forward(50)
    left(90) 

penup()
goto(-100, 100)
pendown()

for i in range(4):
    forward(50)
    left(90) 

penup()
goto(-100, 0)
pendown()

for i in range(4):
    forward(50)
    left(90)


exitonclick()