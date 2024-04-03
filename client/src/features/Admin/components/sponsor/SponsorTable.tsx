
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import AdminModal from '../AdminModal';
import EditSponsorForm from './EditSponsorForm';
import DeleteSponsor from './DeleteSponsor';
import { getSponsors } from '../../../../api/sponsorApi';
import { useQuery } from '@tanstack/react-query';
import { SponsorContext } from '../../../../hooks/useSponsorContext';
import { Sponsor } from '../../../../types/types';

const SponsorTable = () => {

    const { data } = useQuery<Sponsor[]>(
        {
            queryKey: ['sponsors'],
            queryFn: getSponsors,
        }
        );
        console.log(data);

    return (
        <div className="overflow-x-auto">
        <Table className='bg-transparent'>
            <TableHead className='text-primary text-[18px] bg-secondary'>
                <TableHeadCell className='text-start font-semibold p-2 pl-5 text-[16px] bg-transparent'>Nombre</TableHeadCell>
                <TableHeadCell className='text-start font-semibold text-[16px] bg-transparent'>Entidad</TableHeadCell>
                <TableHeadCell className='text-start font-semibold text-[16px] bg-transparent'>Teléfono</TableHeadCell>
                <TableHeadCell className='text-start font-semibold text-[16px] bg-transparent'>Status</TableHeadCell>
                <TableHeadCell className=' bg-transparent' >
                </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y text-contrast">
                {
                    data?.map( (sponsors) =>
                        <TableRow key={sponsors.idPotential_Sponsors} className="bg-accent/10 border-2  border-primary py-4 dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap text-contrast dark:text-white p-2 pl-5">
                                { sponsors.sponsorsName }
                            </TableCell>
                                
                            <TableCell className='text-contrast z-[100]'>
                                { sponsors.sponsorsCompany }
                            </TableCell>

                            <TableCell>
                                { sponsors.sponsorsEmail }
                            </TableCell>

                            <TableCell>
                                { sponsors.sponsorsTelephone }
                            </TableCell>
                            
                            <TableCell className='w-[250px] px-0 space-x-2'>
                                <div className='flex w-full justify-start gap-2 mr-2'>
                                    <SponsorContext.Provider value={sponsors}>
                                        <AdminModal
                                            text = 'Editar'
                                            width = '120px'
                                            fontColor = 'tertiary'
                                            fonthover= 'primary'
                                            bg = 'primary'
                                        >
                                            <EditSponsorForm/>
                                        </AdminModal>
                                        <AdminModal 
                                            text = 'Borrar'
                                            width = '120px'
                                            fontColor = 'secondary'
                                            fonthover= 'primary'
                                            bg = 'primary'
                                        >
                                            <DeleteSponsor/>
                                        </AdminModal>
                                    </SponsorContext.Provider>
                                </div>
                            </TableCell>
                    </TableRow>
                    )}
            </TableBody>
        </Table>
        </div>
    );
}

export default SponsorTable;

