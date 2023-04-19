import Header from '~/components/Layout/DefaultLayout/Header';
import Avatar from './Avatar';
import Form from './Form';
import './Info.scss';

function Information() {
    return (<div>

        <Header />

        <div class="container containerinfo">
            <Avatar />
            <div class="Form"><Form /></div>
        </div>
    </div>);
}

export default Information;