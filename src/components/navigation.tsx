import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiMessageOutline } from '@mdi/js';
import { mdiFileDocumentOutline} from '@mdi/js';
import { mdiAccountOutline} from '@mdi/js';

export default function NavigationBar() {
    return (
        <div>
            <div>
                <Icon path={mdiHomeOutline}
                    title="Home"
                    size={1}
                    color="black"
                />
                <span>Home</span>
            </div>
            <div>
                <Icon path={mdiMessageOutline}
                    title="Inbox"
                    size={1}
                    color="black"
                />
                <span>Inbox</span>
            </div>
            <div>
                <Icon path={mdiFileDocumentOutline}
                    title="Applications"
                    size={1}
                    color="black"
                />
                <span>Inbox</span>
            </div>
            <div>
                <Icon path={mdiAccountOutline}
                    title="Profile"
                    size={1}
                    color="black"
                />
                <span>Account</span>
            </div>
        </div>
    );
}
