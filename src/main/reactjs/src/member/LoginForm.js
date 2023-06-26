import React, {useState} from 'react';
import '../App.css'
import {useNavigate} from "react-router-dom";
import Axios from "axios";
function LoginForm(props) {
    const [myid,setMyid] = useState('');
    const [mypass,setMypass] = useState('');
    const navi = useNavigate();

    //submit 이벤트
    const onSubmitLogin=(e)=>{
        e.preventDefault();
        const url=`/member/login?myid=${myid}&mypass=${mypass}`;
        Axios.get(url)
            .then(res=>{
                if(res.data.success==="yes"){
                    /*
                    localStorage: 직접 지우기 전에는 브라우저에 남아있음
                    sessionStorage: 브라우저 종료 시 지워짐
                     */
                    sessionStorage.loginok="yes";
                    sessionStorage.myname=res.data.myname;
                    sessionStorage.myid=myid;
                    navi("/")
                    window.location.reload();//새로고침
                }else{
                    alert("아이디나 비밀번호가 맞지 않습니다");
                    sessionStorage.loginok="no";
                    sessionStorage.myname="";
                    sessionStorage.myid="";
                }
            })
    }
    return (
        <div className={"login"}>
            <form onSubmit={onSubmitLogin}>
                <table className={'table table-bordered'}>
                    <caption align={"top"}><b>로그인</b></caption>
                    <tbody>
                    <tr>
                        <th style={{width:'100px',backgroundColor:'#ddd'}}>아이디</th>
                        <td>
                            <input type={'text'} className={'form-control'}
                                   placeholder={'이름입력'} required autoFocus
                                   value={myid} onChange={(e)=>setMyid(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <th style={{width:'100px',backgroundColor:'#ddd'}}>비밀번호</th>
                        <td>
                            <input type={'text'} className={'form-control'}
                                   required placeholder={"비밀번호"}
                                   value={mypass} onChange={(e)=>setMypass(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align={'center'} className={"table-danger"}>
                            <button type={'submit'} className={'btn btn-default'}
                                    style={{width:'150px'}}>회원로그인</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default LoginForm;