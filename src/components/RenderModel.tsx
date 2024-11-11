"use client";

// react
import { ReactNode, Suspense } from "react";

// other libraries
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

// types
interface RenderModelProps {
  children: ReactNode;
}

export default function RenderModel({ children }: RenderModelProps) {
  return (
    <Canvas shadows={false} dpr={[1, 2]}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}
