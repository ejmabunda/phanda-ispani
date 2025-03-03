import Link from 'next/link';

import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiMessageOutline } from '@mdi/js';
import { mdiFileDocumentOutline} from '@mdi/js';
import { mdiAccountOutline} from '@mdi/js';



export default function NavigationBar() {
    const buttons = [
        {
            'path': mdiHomeOutline,
            'title': 'Home',
            'href': '/'
        },
        {
            'path': mdiMessageOutline,
            'title': 'Inbox',
            'href': '/inbox'
        },
        {
            'path': mdiFileDocumentOutline,
            'title': 'Applics',
            'href': '/applications'
        },
        {
            'path': mdiAccountOutline,
            'title': 'Profile',
            'href': '/profile'
        }
    ];

    return (
        <div className='bg-black mx-auto pt-3 pb-1 px-5 rounded-lg flex gap-x-4 max-w-sm justify-evenly'>
            {buttons.map((btn, index) => 
                <Link
                    href={btn.href} 
                    key={index} className='text-center'>
                    <div className='bg-lavendar size-min rounded-lg p-1'>
                        <Icon
                            path={btn.path}
                            title={btn.title}
                            size={2}
                        />
                    </div>
                    <span className='text-lavendar m-0'>{btn.title}</span>
                </Link>
            )}
        </div>
    );
}
