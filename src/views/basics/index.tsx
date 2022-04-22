
import { FC } from "react";
import { NftVipAccess } from '../../components/vipAccess';

export const BasicsView: FC = ({ }) => {

  return (
    <div className="md:hero mx-auto p-4">
      <div className="lg:hero-content flex flex-col">
       
        {/* CONTENT GOES HERE */}
        <div className="text-center">
          <NftVipAccess />
        </div>
      </div>
    </div>
  );
};
