import styles from './style.module.scss';
import Double from '@/components/Double';
import { projects } from './data';


export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', height: '400vh', margin: 0 }}>
      <main className={styles.main}>
        <h1>Mes Projets Récents</h1>
        <div className={styles.gallery}>
          {/* Première rangée */}
          {projects.length > 1 && <Double projects={[projects[0], projects[1]]} />}
          {projects.length > 3 && <Double projects={[projects[2], projects[3]]} reversed={true} />}

          {/* Deuxième rangée */}
          {projects.length > 5 && <Double projects={[projects[4], projects[5]]} />}
          {projects.length > 7 && <Double projects={[projects[6], projects[7]]} reversed={true} />}
        </div>
      </main>
    </div>
  );
}
