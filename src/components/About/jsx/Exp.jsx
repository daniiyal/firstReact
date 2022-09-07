import React from "react";
import s from '../css/exp.module.css'
import Item from "./Item";

const Exp = () => {
    return (
        <div className={s.exp_wrapper} id = 'resume'>
            <div className={s.edu}>
                <div className={s.head}>
                    Education
                </div>
                <div className={s.item}>
                    <Item head='��� ��. �.�. ���������' date='2018-2023'
                          descr='������ ����� ��������������, ���������� � ����������. �������������� ���������� � ����������������� �������������� ������'>
                <div className={s.item}>
                    <Item head='���� �������' date='2014-2018'
                          descr='��������� ������������� ������� � ������������ �����. ������������ ����'/>
                </div>
            </div>
            <div className={s.exp}>
                <div className={s.head}>
                    Experience
                </div>
                <div className={s.item}>
                    <Item head='����������' date='2018-2018'
                                descr='�������� ���������������� ��������. ���������� � ����������� ������ ������������ ����, � ������ ���������� ������������ ������ �� Python ��� Raspberry Pi, 
                                        ������������� ���������� �������������� �� ���������� ����������, �������� ����������� �������� ������������ � ������� ����� ������������� ����.'/>
                </div>
            </div>


        </div>
    )
}

export default Exp