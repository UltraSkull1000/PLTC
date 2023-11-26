import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const teams = [
  {
    name: "All Teams",
    logo: require("./Img/logo.jpeg"),
  },
  {
    name: "team1",
    logo: require("./Img/logo.jpeg"),
  },
  {
    name: "team2",
    logo: require("./Img/logo.jpeg"),
  },
  {
    name: "team3",
    logo: require("./Img/logo.jpeg"),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TeamFilter = ({ selectedTeam }) => {
  const [selected, setSelected] = useState(teams[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-2 w-1/4 mr-5">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left black shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img
                  src={selected.logo}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full object-cover"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-1/6 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {teams.map((team) => (
                  <Listbox.Option
                    key={team.name}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-purple-800 text-white" : "text-black",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={team}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={team.logo}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full object-cover"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {team.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-purple-900",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
export default TeamFilter;
