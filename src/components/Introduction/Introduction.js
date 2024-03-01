import Column from '../Layout/Column/Column';
import styles from './Introduction.module.css';
import typography from '../../theme/typography.module.css';
import Button from '../Button/Button';
import image from '../../assets/personal_pic.png'
import { CrossAxisAlignment, MainAxisAlignment } from '../Layout/Layout';
import { useState, useEffect } from 'react'

const Introduction = () => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    var downloadIcon = (<span className="material-symbols-outlined">
        downloading
    </span>);

    function isMobilePhone() {
        return windowSize[0] <= 992;
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className={`${styles.introduction}`}>
            <div className={`${styles.left}`}>
                <Column gap={isMobilePhone() ? 15 : 20} mainAxisAlignment={isMobilePhone() ? MainAxisAlignment.center : null} crossAxisAlignment={isMobilePhone() ? CrossAxisAlignment.center : null}>
                    <Column gap={5} crossAxisAlignment={isMobilePhone() ? CrossAxisAlignment.center : null}>
                        <div className={`${typography['headline-small']} ${styles.subtitle}`}>Hi, I'm</div>
                        <h1 className={`${typography[isMobilePhone() ? 'display-medium' : 'display-large']} ${styles.title}`}>Mohamad Shahin</h1>
                    </Column>
                    <div className={`${styles.line}`}></div>
                    <h2 className={`${styles.subtitle} ${typography[isMobilePhone() ? 'body-large' : 'headline-small']}`}>Software Engineer</h2>
                    <Column gap={10} crossAxisAlignment={isMobilePhone() ? CrossAxisAlignment.center : null}>
                        {/* <Button title={"Learn More"} type={'tonal'}></Button> */}
                        <a href='https://docs.google.com/uc?id=1nf699ydrVMOJwnZjAfn95AMVZIKTNenh&export=download'><Button title={"Download CV"} type={'outline'} icon={downloadIcon}></Button></a>
                    </Column>
                </Column>
            </div>
            <div className={`${styles.right}`}>
                <img src={image} alt='Personal Portrait' className={`${styles.pic}`}></img>
            </div>
        </div>
    );
}

export default Introduction;