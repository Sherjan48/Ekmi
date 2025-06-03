import photo1 from '../assets/divan.png'
import photo2 from '../assets/kreslo.png'
import photo3 from '../assets/krovat.png'
import photo4 from '../assets/matras.png'
import photo5 from '../assets/puf.png'
import photo6 from '../assets/stul.png'
import photo7 from '../assets/eksmebel.png'
import { Route } from 'react-router-dom'

export const data  = [
    { name: "ДИВАНЫ", 
      img: photo1,
      Route: '/divani'
     },
    { name: "СТУЛЬЯ", 
      img: photo2,
      Route: '/stulya'
      
    },
    { name: "КРЕСЛА", 
      img: photo3,
      Route: '/kresla'
    },
    // { name: "КРОВАТИ", 
    //     img: photo4
    //  },
    // { name: "МАТРАЦЫ", 
    //     img: photo5
    // },
    // { name: "ПУФЫ", 
    //   img: photo6
    // },
    { name: "ЭКСКЛЮЗИВНАЯ МЕБЕЛЬ", 
      img: photo7
     },
  ];
  
  