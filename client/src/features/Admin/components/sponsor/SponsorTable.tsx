
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

const SponsorTable = () => {
    return (
        <div className="overflow-x-auto">
        <Table>
            <TableHead className='text-secondary text-[18px]'>
                <TableHeadCell className='text-start'>Nombre</TableHeadCell>
                <TableHeadCell className='text-start'>Entidad</TableHeadCell>
                <TableHeadCell className='text-start'>Teléfono</TableHeadCell>
                <TableHeadCell className='text-start'>Status</TableHeadCell>
                <TableHeadCell className='text-start'>
                    <span className="sr-only">Edit</span>
                </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y text-contrast">
                <TableRow className="bg-white py-4 dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap text-contrast dark:text-white">Sponsor1</TableCell>
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
                    <TableCell className="whitespace-nowrap text-contrast dark:text-white">Sponsor2</TableCell>
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
                    <TableCell className="whitespace-nowrap text-contrast dark:text-white">Sponsor3</TableCell>
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

