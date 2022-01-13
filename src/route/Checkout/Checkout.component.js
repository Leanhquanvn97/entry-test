import {Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component';
import './Checkout.extension.style'

/** @namespace Route/Checkout/Component */
export class Checkout extends SourceCheckout{
    state = {
        currentProgress: '',
        step: 0
    }
    componentDidUpdate=()=>{
        const keys = Object.keys(this.stepMap);
        let id = keys.indexOf(this.state.currentProgress);
        if(this.props.checkoutStep)
            this.setState({currentProgress: this.props.checkoutStep,
                step: id
            });
    }
    
    renderProgress = () => { 
        const { checkoutStep } = this.props;
        const keys = Object.keys(this.stepMap);
        return keys.slice(0,2).map((el,index)=>{
            let title=el.replace('_STEP', '')
            let sad = ''
            let tick = ''
            if(index < this.state.step){
                tick = '✓';
            }
            else{
                tick = index + 1;
            }
            if(index <= this.state.step){
                sad = 'progress-step selected';
                
            }else{
                sad = 'progress-step';
                
            }
            return(
                <div className='progress'>
                    <div className={sad}>{tick}</div>
                    <div className='progress-text'>{title}</div>
                </div>
            )
        });
    }
    renderProgressBar(){
        
        console.log( this.state.step)
        return(
            <div className='checkout-progress-bar'>  
            <div className='progress-bar' style={{width:(this.state.step+1)*34+"%"}}></div>
                {this.renderProgress()}
            </div>
        )
    }
}

export default Checkout;