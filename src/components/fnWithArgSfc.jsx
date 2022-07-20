const FnWithArgSfc = () => {
    return (  
        <button onClick={callMe("you called!")} className="btn btn-info"> Func w/arg SFC </button>
    );
}

const callMe = text => () => alert(text)//console.log(text);
//const callMe = text => console.log(text);    ->     Not working

export default FnWithArgSfc;