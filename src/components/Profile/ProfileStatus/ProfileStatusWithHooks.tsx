import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {updateStatus} from "../../../redux/profile-reducer";
import {RootStateType} from "../../../redux/store";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


const ProfileStatusWithHooks: React.FC<ProfileStatusType> = ({status, updateStatus}) => {


    const [statusData, setStatusData] = useState(status);
    const [editMode, setEditMode] = useState(false);

    useEffect(()=> {
        setStatusData(status);
    },[status]);


    const editStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusData(e.currentTarget.value);
    };
    const editDataHandler = () => {
        updateStatus(statusData);
        setEditMode(false)
    };
    const editModeHandler = () => {
        setEditMode(true);
    };

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={editModeHandler}>{status || 'no status'}</span>
                </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} type="text" value={statusData} onChange={editStatusHandler}
                       onBlur={editDataHandler}/>
            </div>
            }

        </>
    )

};

export default ProfileStatusWithHooks