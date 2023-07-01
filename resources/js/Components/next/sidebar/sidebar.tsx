import React, {useState} from 'react';
import { Link } from '@inertiajs/react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {AcmeIcon} from '../icons/acme-icon';
import {Flex} from '../styles/flex';
import {HomeIcon} from '../icons/sidebar/home-icon';
import {PaymentsIcon} from '../icons/sidebar/payments-icon';
import {AccountsIcon} from '../icons/sidebar/accounts-icon';
import {CustomersIcon} from '../icons/sidebar/customers-icon';
import {ProductsIcon} from '../icons/sidebar/products-icon';
import {ReportsIcon} from '../icons/sidebar/reports-icon';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {useSidebarContext} from '../layout/layout-context';

export const SidebarWrapper = () => {
   const {collapsed, setCollapsed} = useSidebarContext();
   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
               <AcmeIcon />
            </Sidebar.Header>
            <Flex
               direction={'column'}
               justify={'between'}
               css={{height: '100%'}}
            >
               <Sidebar.Body className="body sidebar">
                  <SidebarItem
                     title="Home"
                     icon={<HomeIcon />}
                     href="/"
                  />
                  <SidebarMenu title="Menu">
                     
                  <Link href={route('dashboard')}>
                     <SidebarItem
                        title="Organization"
                        icon={<AccountsIcon />}
                        href="accounts"
                     />
                  </Link>
                  <Link href={route('dashboard')}>
                        <SidebarItem
                           title="Instructors"
                           icon={<PaymentsIcon />}
                        />
                     </Link>
                  <Link href={route('dashboard')}>
                     <SidebarItem
                        title="Students"
                        icon={<CustomersIcon />}
                     />
                  </Link>
                  <Link href={route('dashboard')}>
                     <SidebarItem
                        title="Checkpoints"
                        icon={<ProductsIcon />}
                     />
                  </Link>
                  <Link href={route('dashboard')}>
                     <SidebarItem
                        title="Reports"
                        icon={<ReportsIcon />}
                     />
                  </Link>
                  </SidebarMenu>
               </Sidebar.Body>
               {/* <Sidebar.Footer>
                  <Tooltip content={'Settings'} rounded color="primary" css={undefined} contentColor={undefined}>
                     <SettingsIcon />
                  </Tooltip>
               </Sidebar.Footer> */}
            </Flex>
         </Sidebar>
      </Box>
   );
};
