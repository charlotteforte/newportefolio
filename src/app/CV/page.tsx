import React from 'react';
import styles from './style.module.scss';
import './anim.css'; 

const CV = () => {
  return (
    <div className="bg-black text-white font-sans p-8 min-h-screen">
      <div className="page-content">  {/* Appliquer l'animation à toute la page */}
        <h1 className={styles.main}>Curriculum vitæ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="bg-neutral-900 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-6">EDUCATION</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold">2024</h3>
                <p>MASTER CRÉATION NUMÉRIQUE, DESIGN UX / UI</p>
                <p>UFR Ingémédia à l’Université de Toulon.</p>
              </li>
              <li>
                <h3 className="font-bold">2021/2024</h3>
                <p>LICENCE ARTS PLASTIQUES</p>
                <p>Aix en Provence.</p>
              </li>
              <li>
                <h3 className="font-bold">2021</h3>
                <p>BAC MENTION ASSEZ BIEN</p>
                <p>Histoire-Géopolitique, Anglais, Philosophie.</p>
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="bg-neutral-900 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-6">SKILLS</h2>
            <div className="flex flex-col space-y-4">
              <span className="skill-item bg-green-700 py-2 px-4 rounded-md text-center">BLENDER 3D</span>
              <span className="skill-item bg-green-600 py-2 px-4 rounded-md text-center">ILLUSTRATOR</span>
              <span className="skill-item bg-green-500 py-2 px-4 rounded-md text-center">FIGMA</span>
              <span className="skill-item bg-green-400 py-2 px-4 rounded-md text-center">PHOTOSHOP</span>
              <span className="skill-item bg-green-300 py-2 px-4 rounded-md text-center">AFTER EFFECT</span>
            </div>
          </div>

          {/* Artistic Journey Section */}
          <div className="bg-neutral-900 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-6">PARCOURS ARTISTIQUE</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold">2012/2020</h3>
                <p>CONSERVATOIRE DE DANSE</p>
                <p>Obtention du BEC (brevet d’étude chorégraphique) avec mention bien.</p>
              </li>
              <li>
                <h3 className="font-bold">2019/2020</h3>
                <p>PARCOURS ORIENTATION PROFESSIONNELLE DE DANSE</p>
              </li>
              <li>
                <h3 className="font-bold">2013/2017</h3>
                <p>CONSERVATOIRE DE MUSIQUE</p>
                <p>Instrument: guitare, Enseignement du solfège.</p>
              </li>
            </ul>
          </div>

          {/* Professional Experience Section */}
          <div className="bg-neutral-900 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-6">EXPERIENCE PROFESSIONNEL</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold">2021</h3>
                <p>LOUNGE BAR "LE GARLABAN" SUR L’ÎLE DES EMBIEZ</p>
                <p>Travail Saisonnier</p>
              </li>
              <li>
                <h3 className="font-bold">2023</h3>
                <p>PLATEFORME INDUSTRIELLE DE COURRIER, LA VALETTE</p>
                <p>Travail Saisonnier</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-neutral-900 p-6 rounded-md mt-8">
          <h2 className="text-xl font-semibold mb-4">Contact:</h2>
          <p className="text-x font-semibold mb-4">
            Numero de telephone: <span className="text-gray-200">06 09 69 27 30</span>
          </p>
          <p className="text-x font-semibold mb-4">
            E-mail: <a href="mailto:example@example.com" className="text-green-500 underline">charlotteforte808@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CV;
