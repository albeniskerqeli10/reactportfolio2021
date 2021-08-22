
import ecommerce from '../assets/images/ecommerce.webp'
import covid from '../assets/images/covid.webp'
import food from '../assets/images/food.webp'
import todo from '../assets/images/todo.webp'

export const projects  = [
    {
        name:"Ecommerce Web App",
        image:ecommerce,
        description:'An Ecommerce Wb App built with ReactJs among wih his libraries, also provider Paypal for products checkout',
        technologies:'React, HTML, CSS, Paypal',
        livedemo:'https://reactjs-commerce.netlify.app/',
        sourcecode:'https://github.com/Albenis-Kerqeli/Reactjs-Ecommerce-App',
    } , 

    {
        name:"Covid 19 Tracker App",
        image:covid,
        description:'a Covid 21 Tracker App, which tracks real-time covid data worldwide',
        technologies:'Javascript, HTML, CSS, API',
        livedemo:'https://albenis-kerqeli.github.io/Covid-19-Tracker-App/',
        sourcecode:'https://github.com/Albenis-Kerqeli/Covid-19-Tracker-App',
    },
    {
        name:"Food Ordering App Website ",
        image:food,
        description:'A website development and design  for a food ordering application,a figma design converted to react website',
        technologies:'React, HTML, CSS',
        livedemo:'https://react-design-d6e9f.web.app/',
        },
        
      {
        name:"Todo App ",
        image:todo,
        description:'A simple todo App built with React and Firebase, that you canadd,edit and delete your tasks in a simple way',
        technologies:'React, HTML, CSS, Firebase',

        livedemo:'https://todo-app-2021-54205.web.app/'
    }
]