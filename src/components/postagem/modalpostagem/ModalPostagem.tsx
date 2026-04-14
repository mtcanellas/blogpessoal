

import 'reactjs-popup/dist/index.css';
import FormPostagem from '../formpostagem/FormPostagem';
import { Link } from 'react-router-dom';

function ModalPostagem() {
    return (
        <>
            
                trigger={
                    <Link to='/cadastrarpostagem'
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Postagem
                    </Link>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            
                <FormPostagem />
           
        </>
    );
}

export default ModalPostagem;