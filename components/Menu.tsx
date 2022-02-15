import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";
import styles from '../styles/Menu.module.css'

const Menu = () => {
  const [ menuState, setMenuState ] = useState(false);
  const router = useRouter();
  const menuItems = [
    {
      id: 1,
      text: 'HOME',
      link: '/',
      icon: 'icon icon-home'
    },
    {
      id: 2,
      text: 'PROJECTS',
      link: '/projects',
      icon: 'icon icon-profile'
    },
    {
      id: 3,
      text: 'ABOUT',
      link: '/about',
      icon: 'icon icon-trips'
    },
    {
      id: 4,
      text: 'CONTACT',
      link: '/contact',
      icon: 'icon icon-rewards'
    }
  ]

  return (
    <nav className={styles.container}>
      <div className={ menuState ? styles['menu-show'] : styles['menu-hide']}>
        {
          menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              passHref
            >
              <div
                className={ (router.pathname === item.link) ? styles.active : styles.item}
                onClick={() => setMenuState(false)}
              >
                <i className={item.icon} />
                <p className={styles.text}>{item.text}</p>
              </div>
            </Link>
          ))
        }
      </div>
      <button
        className={styles.menuButton}
        type="button"
        onClick={() => setMenuState(!menuState)}
      >
        Menu
      </button>
    </nav>
  )
}

export default Menu