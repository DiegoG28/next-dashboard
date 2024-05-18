import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import logo from '../ui/diegode.svg';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image alt="Logo" src={logo} height={70} />
      {/*<GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />*/}
    </div>
  );
}
