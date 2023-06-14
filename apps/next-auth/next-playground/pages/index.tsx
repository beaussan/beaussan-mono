import styles from './index.module.css';
import { LoginBtn } from '../components/login-btn';
import { Todos } from '../components/gqlQuery';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome next-auth/next-playground 👋
            </h1>
          </div>

          <LoginBtn />
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default Index;
