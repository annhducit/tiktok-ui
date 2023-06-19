import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import HeaderOnly from '~/layouts/HeaderOnly';
import config from '~/config';

const publicRoute = [
    { path: config.router.home, component: Home },
    { path: config.router.following, component: Following },
    { path: config.router.profile, component: Profile },
    { path: config.router.upload, component: Upload, layout: HeaderOnly },
];
const privateRoute = [{}];

export { publicRoute, privateRoute };
