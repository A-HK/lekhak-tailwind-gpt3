import{
    BoltIcon,
    SquaresPlusIcon,
    ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline';

export default function EmptyState() {
    return (
        <>
      <div
        type="button"
        className="flex flex-col block items-center justify-center w-full h-full rounded-lg p-12 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        <SquaresPlusIcon className="h-12 w-12 text-gray-300 inline-block text-light"/>
        <span className="mt-2 inline-block text-md font-medium text-gray-900">No component to display yet</span>
        <span className="mt-2 inline-block text-sm font-medium text-gray-400">Get started - Enter a prompt to witness the magic</span>
        <button><ArrowsPointingOutIcon className="absolute bottom-14 right-24 h-8 w-8 bg-gray-700 text-white rounded-lg p-2"/></button>
      </div>
      
      </>
    )
}