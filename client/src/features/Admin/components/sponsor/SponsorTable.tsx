
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

const SponsorTable = () => {
    return (
        <div className="overflow-x-auto">
        <Table className='bg-transparent'>
            <TableHead className='text-primary text-[18px] bg-secondary'>
                <TableHeadCell className='text-start font-semibold p-2 bg-transparent'>Nombre</TableHeadCell>
                <TableHeadCell className='text-start font-semibold bg-transparent'>Entidad</TableHeadCell>
                <TableHeadCell className='text-start font-semibold bg-transparent'>Teléfono</TableHeadCell>
                <TableHeadCell className='text-start font-semibold bg-transparent'>Status</TableHeadCell>
                <TableHeadCell className=' bg-transparent' >
                </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y text-contrast">
                <TableRow className="bg-white py-4 dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap text-contrast dark:text-white p-2">Sponsor1</TableCell>
                    <TableCell>Entidad1</TableCell>
                    <TableCell>Telefono1</TableCell>
                    <TableCell>pending</TableCell>
                    <TableCell>
                    <a href="#" className="font-medium text-accent hover:underline dark:text-cyan-500">
                        ver mas
                    </a>
                    </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap text-contrast dark:text-white p-2">Sponsor2</TableCell>
                    <TableCell>Entidad2</TableCell>
                    <TableCell>Telefono2</TableCell>
                    <TableCell>activo</TableCell>
                    <TableCell>
                    <a href="#" className="font-medium text-accent hover:underline dark:text-cyan-500">
                        ver mas
                    </a>
                    </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap text-contrast dark:text-white p-2">Sponsor3</TableCell>
                    <TableCell>Entidad3</TableCell>
                    <TableCell>Telefono3</TableCell>
                    <TableCell>activo</TableCell>
                    <TableCell>
                    <a href="#" className="font-medium text-accent hover:underline dark:text-cyan-500">
                    ver mas
                    </a>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </div>
    );
}

export default SponsorTable;

