'use client';
import Description from '../components/Description';
import Landing from '../components/Landing';
import SlidingImages from '../components/SlidingImages';
import Footer from '../components/Footer';



interface PageProps {
 
}

export default function Home({}: PageProps) {
  
 return (
   <main>
    <Landing />
     <Description/>
     <SlidingImages />
     <Footer/>
   </main>

  
 );
 
 
}
