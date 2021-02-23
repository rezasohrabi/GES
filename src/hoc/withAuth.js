import { useAuth } from './../customHooks/index';

const WithAuth = props => useAuth(props) && props.children;

export default WithAuth;