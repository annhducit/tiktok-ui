import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import MenuSidebar from './Menu';
import MenuItem from './MenuItem';
import { ExploreIcon, GroupIcon, HomeIcon, LiveIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <MenuSidebar>
                <MenuItem to={config.router.home} title="For you" icon={<HomeIcon />}></MenuItem>
                <MenuItem to={config.router.following} title="Following" icon={<GroupIcon />}></MenuItem>
                <MenuItem to={config.router.explore} title="Explore" icon={<ExploreIcon />}></MenuItem>
                <MenuItem to={config.router.live} title="LIVE" icon={<LiveIcon />}></MenuItem>
            </MenuSidebar>
        </aside>
    );
}

export default Sidebar;
