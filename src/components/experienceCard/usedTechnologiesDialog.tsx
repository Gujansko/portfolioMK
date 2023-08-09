import { technology } from "@/components/experienceSection/experience";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Info } from "lucide-react";
import Image from "next/image";

export default function UsedTechnologiesDialog({
  technologies,
}: {
  technologies: technology[];
}) {
  return (
    <div className="mt-4 flex items-center justify-center text-xl font-bold text-slate-950">
      <Dialog>
        <DialogTrigger>
          <div className="flex items-center gap-2 capitalize">
            Used Technologies <Info height={30} width={30} />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="flex flex-col gap-4">
              {technologies.map((technology, idx) => (
                <div
                  className="flex items-center gap-2 text-base font-bold text-slate-950"
                  key={idx}
                >
                  <Image
                    src={`${technology.image}`}
                    alt={""}
                    width={30}
                    height={30}
                  />
                  <p>{`${technology.name}: `}</p>
                  <p className="text-left font-medium">
                    {`${technology.description}${
                      idx === technologies.length - 1 ? "." : ","
                    }`}
                  </p>
                </div>
              ))}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
