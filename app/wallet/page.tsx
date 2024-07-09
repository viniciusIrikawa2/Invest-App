'use client';
import React, { useState } from 'react';
import Table from '../components/Table';
import Modal from '../components/Modal';

const WalletPage = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div>
            <h1 className='mt-14 ml-10 text-in-white text-xl uppercase font-bold'> My Wallet </h1>
            <Table setShowModal={setShowModal}/>
            {showModal && <Modal setShowModal={setShowModal}/>}
        </div>
    )
}

export default WalletPage;