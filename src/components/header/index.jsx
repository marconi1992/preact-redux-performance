import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">Why React?</Link>
			<Link activeClassName={style.active} href="/wasted-renders">Wasted Renders</Link>
			<Link activeClassName={style.active} href="/part-1">Part 1</Link>
			<Link activeClassName={style.active} href="/part-2">Part 2</Link>
			<Link activeClassName={style.active} href="/part-3">Part 3</Link>
			<Link activeClassName={style.active} href="/redux">Redux</Link>
		</nav>
	</header>
);

export default Header;
