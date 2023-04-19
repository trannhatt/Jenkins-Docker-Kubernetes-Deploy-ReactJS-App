import  './Form.scss';

function FormItem({label, placeholder, value}) {
    return ( 
        <div class="item">
            <label >{label}</label>
            <input  type="text" placeholder={placeholder} value={value}/>
        </div>
     );
}

export default FormItem;