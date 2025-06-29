import { Skeleton } from "@/Components/UI/skeleton";

export default function SkeletonPage() {
    return (
        <div className="p-8 space-y-8">
            {/* Image Skeleton */}
            <Skeleton className="w-full h-64 rounded-lg" />

            {/* Title Skeleton */}
            <Skeleton className="w-1/2 h-8 rounded" />

            {/* Subtitle Skeleton */}
            <Skeleton className="w-1/3 h-6 rounded" />

            {/* Paragraph Skeletons */}
            <div className="space-y-2">
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-5/6 h-4 rounded" />
                <Skeleton className="w-2/3 h-4 rounded" />
            </div>

            {/* Link Skeletons */}
            <div className="flex space-x-4">
                <Skeleton className="w-24 h-8 rounded" />
                <Skeleton className="w-20 h-8 rounded" />
            </div>
        </div>
    );
}