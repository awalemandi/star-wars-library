
const Copyright = () => {
    return (
        <div>
            {'Copyright © '}
            <a href='https://github.com/awalemandi/tally'>
                Star Wars Library
			</a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </div>
    );
};

function Footer() {
    return (
        <footer>
            <Copyright />
        </footer>
    );
}

export default Footer;
