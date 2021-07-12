import React, { useContext, useEffect, useState } from 'react';
import {Btn, UserContext} from '../Components';
import nodeRoot from '../img/node_root.jpg';
import nodeL from '../img/nodeL.jpg';
// import nodeR from '../img/nodeR.jpg';
import { getUser } from '../utils';

const Genealogy = () => {
    const user = useContext(UserContext)

    const [rootId, setRootId] = useState(user.userId)
    const [branch2, setBranch2] = useState(['',''])
    const [branch3, setBranch3] = useState(['','','',''])
    const [branch4, setBranch4] = useState(['','','','','','','',''])
    const [branch5, setBranch5] = useState(['','','','','','','','','','','','','','','',''])
    // const [t, setT] = useState([])


    useEffect(()=>{
        
        generateData(rootId)
       
        // setT('done')
    },[rootId])

    const regenerate = (topline) => {
        setBranch2(['',''])
        setBranch3(['','','',''])
        setBranch4(['','','','','','','',''])
        setBranch5(['','','','','','','','','','','','','','','',''])
        setRootId(topline)
        generateData(rootId)
    }

    const generateData = async (id) => {
        
        const branch2i = []
        const branch3i = []
        const branch4i = []
        const branch5i = []
        getUser(id).then(user=>{
            if(user===undefined){
                branch2i.push("")
                branch2i.push("")
            }else {
                branch2i.push(user.downlines.left)
                branch2i.push(user.downlines.right)
            }
           
            
                
        }).then(()=>{
            setBranch2(branch2i)
            let count = 0
            branch2i.forEach((id)=>{
                getUser(id).then(user=>{
                    if(user===undefined){
                        branch3i.push("")
                        branch3i.push("")
                    }else {
                        branch3i.push(user.downlines.left)
                        branch3i.push(user.downlines.right)
                    }
                        
                        console.log(branch3i,'mdmdmdmdmdmdmdmdmdm')
                }).then(()=>{
                    if(count>=1){
                        setBranch3(branch3i)
                    }
                    count+=1

                    //solving for 4th branch
                    branch3i.forEach(id=>{

                        getUser(id).then(user=>{
                            if(user===undefined){
                                branch4i.push("")
                                branch4i.push("")
                            }else {
                                branch4i.push(user.downlines.left)
                                branch4i.push(user.downlines.right)
                            }
        
                            
                        }).then(()=>{
                            if(count>=7){
                                setBranch4(branch4i)
                            }
                            count+=2
                            console.log(branch4i,'iiiiiiiii')
                        })
                    })
                })
                    
                
            })
        })
            
        
            
        
            branch4i.forEach(id=>{
                getUser(id).then(user=>{
                    if(user===undefined){
                        branch5i.push("")
                        branch5i.push("")
                    }else {
                        branch5i.push(user.downlines.left)
                        branch5i.push(user.downlines.right)
                    }

                    setBranch5(branch5i)
                })
            })
    }

    return (
        <div className="genealogy">
            <div className="treecontainer">
            {/* // tree  */}

                <div className="tree">
                    <div className="branchlane">
                        <div className="branch" title={rootId}>
                            <p className="p"><img src={nodeRoot} alt="node-icon" /></p>    
                            <p>1</p>
                        </div>
                    </div>

                    {/* // branch line 2 */}
                    <div className="branchlane" style={{width: '100%'}}>
                        {branch2.map((branch,i)=>{
                            return <div className="branch" title={branch} onClick={()=> regenerate(branch)}>
                                {branch==="" || branch===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }  
                                <p>{i+2}</p>
                            </div>
                        })}
                    </div>

                    {/* // branch line 3 */}
                    <div className="branchlane" style={{width: '97%'}}>
                        {branch3.map((branch,i)=>{
                            return <div className="branch" title={branch} onClick={()=> regenerate(branch)}>
                                {branch==="" || branch===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }  
                                <p>{i+4}</p>
                            </div>
                        })}
                    </div>

                    {/* {// branch line 4} */}
                    <div className="branchlane" style={{width: '88%'}}>
                        {branch4.map((branch, i)=>{
                            return <div className="branch" title={branch} onClick={()=> regenerate(branch)}>
                                {branch==="" || branch===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }  
                                <p>{i+8}</p>
                            </div>
                        })}
                    </div>
                    <div className="branchlane" style={{width: '85%'}}>
                        {branch5.map((branch, i)=>{
                            return <div className="branch" title={branch} onClick={()=> regenerate(branch)}>
                                {branch==="" || branch===undefined?<p className="p"></p>  :<p className="p"><img src={nodeL} alt="node-icon" /></p>  }  
                                <p>{i+16}</p>
                            </div>
                        })}
                        
                    </div>
                </div>
            </div>

            <div className="search">
                <h3>Genealogy</h3>
                <div className="form">
                    <input placeholder="Enter UserID here" />
                    <div><Btn text="Search" bgColor="gray" color="white" /></div>
                    <div><Btn text="Home" bgColor="green" color="white" /></div>
                </div>
            </div>

            <div className="downlines">
                <h3>Downlines</h3>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Left</td>
                                <td>Right</td>
                                <td>Sponsor</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>JOHN DOE (NG000000)</td>
                                <td>10</td>
                                <td>8</td>
                                <td>JOHN SMITH (NG000000)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>JOHN DOE (NG000000)</td>
                                <td>6</td>
                                <td>2</td>
                                <td>JOHN SMITH (NG000000)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Genealogy;