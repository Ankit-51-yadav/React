import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card';
import ThemeBtn from './Components/ThemeBtn';
import { ThemeProvider } from './Contexts/Theme';



function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  
  }
  
  const darkTheme = () => {
    setThemeMode('dark');

  }
  //Actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);
  }
  ,[themeMode])

  const cardData = [
    {
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "MacBook Pro 16-inch, M3 Chip, Space Gray",
      price: "$2499",
      rating: "4.5",
      alt: "macbook_image"
    },
    {
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "iPhone 15 Pro Max, Titanium Blue",
      price: "$1199",
      rating: "4.8",
      alt: "iphone_image"
    },
    {
      image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Sony WH-1000XM5 Wireless Headphones",
      price: "$349",
      rating: "4.7",
      alt: "headphones_image"
    },
    {
      image: "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Apple Watch Ultra 2, Titanium Case",
      price: "$799",
      rating: "4.6",
      alt: "watch_image"
    },
    {
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Nintendo Switch OLED Model",
      price: "$349",
      rating: "4.4",
      alt: "nintendo_image"
    },
    {
      image: "https://images.pexels.com/photos/209778/pexels-photo-209778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Canon EOS R6 Mark II Camera",
      price: "$2499",
      rating: "4.9",
      alt: "camera_image"
    },
    {
      image: "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Dell XPS 13 Laptop, Intel i7",
      price: "$1299",
      rating: "4.3",
      alt: "dell_image"
    },
    {
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Samsung Galaxy S24 Ultra",
      price: "$1299",
      rating: "4.5",
      alt: "samsung_image"
    }
  ];


  return (
    <ThemeProvider value={{
      themeMode, lightTheme, darkTheme
    }}>
  
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-end mb-8">
                       <ThemeBtn />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {cardData.map((card, index) => (
                            <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20 dark:border-gray-700/50">
                                <Card {...card} />
                            </div>
                        ))}
                    </div>
                </div>
     </div>
</ThemeProvider>
  )
}

export default App
